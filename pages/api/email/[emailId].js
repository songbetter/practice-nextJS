import { buildEmailPath, extractEmail } from '.'

export default function handler(req, res) {
  const { query } = req
  const emailId = query.emailId
  const filePath = buildEmailPath()
  const emailData = extractEmail(filePath)
  const selectedEmail = emailData.find((email) => email.id === emailId)

  res.status(200).json({ email: selectedEmail })
}
