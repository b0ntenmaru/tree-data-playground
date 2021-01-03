import express from 'express'
const app = express()

app.get('/departments', function (_req, res) {
  const departments = [
    {
      id: 1,
      name: '社長室',
      parent_id: null,
    },
    {
      id: 2,
      name: 'プロダクトDiv',
      parent_id: 1,
    },
    {
      id: 3,
      name: 'エージェントG',
      parent_id: 2,
    },
    {
      id: 4,
      name: 'プラットフォームG',
      parent_id: 2,
    },
    {
      id: 5,
      name: 'バックエンドG',
      parent_id: 4,
    },
    {
      id: 6,
      name: 'リファクタリング部',
      parent_id: 5,
    },
    {
      id: 7,
      name: 'フロントエンドG',
      parent_id: 4,
    },
  ]
  res.send(departments)
})

module.exports = {
  path: '/api/',
  handler: app,
}
