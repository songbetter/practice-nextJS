// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fs from 'fs'
import path from 'path'

export default function handler(req, res) {
  const { method, body } = req

  const filePath = path.join(process.cwd(), 'data', 'email.json')
  const fileData = fs.readFileSync(filePath)
  const data = JSON.parse(fileData)

  if (method === 'POST') {
    const { email } = body

    const newEmail = {
      id: new Date().toISOString(),
      email,
    }

    data.push(newEmail)
    fs.writeFileSync(filePath, JSON.stringify(data))
    res
      .status(201)
      .json({ message: '구독 신청이 완료되었습니다.', email: newEmail })
  } else {
    res.status(200).json({ data })
  }
}
