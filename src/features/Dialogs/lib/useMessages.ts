import { MessageType } from './../model/types';
import { useState, useEffect } from "react"
import { firestore } from "lib/firebase"
import { useParams } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { profileSelectors } from "features/Profile"
import { dialogsActions } from "features/Dialogs/model"
import { dialogsApi } from "api/dialogsApi"


export const useMessages = () => {
    const params: any = useParams()
    const [loading, setLoading] = useState(true)
    const { handle } = useSelector(profileSelectors.credentials)
    const dispatch = useDispatch()

    useEffect(() => {
        if (params.dialogId && handle) {
            const unsubscribe = firestore
                .collection('messages')
                .where('dialogId', "==", params.dialogId)
                .limit(100)
                .orderBy('createdAt', 'desc')
                .onSnapshot(snapshot => {
                    let unreadMessagesCount = 0
                    const batch = firestore.batch()
                    const messagesData = snapshot.docs.map(doc => {
                        const message = doc.data()
                        if (!message.read && message.recipient === handle) {
                            batch.update(doc.ref, { read: true })
                            unreadMessagesCount++
                        }

                        const newMessage: MessageType = {
                            id: doc.id,
                            body: message.body,
                            createdAt: message.createdAt.toDate().toISOString(),
                            read: message.read,
                            recipient: message.recipient,
                            sender: message.sender,
                            senderImageUrl: message.senderImageUrl,
                            isMine: handle === message.sender
                        }

                        return newMessage
                    })

                    if (unreadMessagesCount > 0) {
                        dialogsApi.markReadMessages(unreadMessagesCount, params.dialogId)
                    }
                    batch.commit()
                    dispatch(dialogsActions.setMessages(messagesData))
                    dispatch(dialogsActions.setCurrentDialog(params.dialogId))
                    setLoading(false)
                })

            return () => unsubscribe()
        }


    }, [dispatch, params.dialogId, handle])

    return loading
}