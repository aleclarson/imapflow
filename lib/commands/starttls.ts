// Requests STARTTLS info from server
export const STARTTLS = async connection => {
  if (!connection.capabilities.has('STARTTLS') || connection.secureConnection) {
    // nothing to do here
    return false
  }

  let response
  try {
    response = await connection.exec('STARTTLS')
    response.next()
    return true
  } catch (err) {
    connection.log.warn({ err, cid: connection.id })
    return false
  }
}
