// Closes a mailbox
export const CLOSE = async connection => {
  if (connection.state !== connection.states.SELECTED) {
    // nothing to do here
    return
  }

  let response
  try {
    response = await connection.exec('CLOSE')
    response.next()

    let currentMailbox = connection.mailbox
    connection.mailbox = null
    connection.currentSelectCommand = false
    connection.state = connection.states.AUTHENTICATED

    if (currentMailbox) {
      connection.emit('mailboxClose', currentMailbox)
    }
    return true
  } catch (err) {
    connection.log.warn({ err, cid: connection.id })
    return false
  }
}
