import express from 'express';
const app = express();

app.get('/departments', function (_req, res) {
  const departments = [
    {
      id: 1,
      name: '社長室',
      parent_id: null,
      members: [{ id: 1, name: 'だて' }],
    },
    {
      id: 2,
      name: 'プロダクトDiv',
      parent_id: 1,
      members: [{ id: 2, name: 'ひろあき' }],
    },
    {
      id: 3,
      name: 'エージェントG',
      parent_id: 2,
      members: [
        { id: 3, name: '天気の子' },
        { id: 4, name: '' },
      ],
    },
    {
      id: 4,
      name: 'プラットフォームG',
      parent_id: 2,
      members: [
        { id: 5, name: 'ロナウド' },
        { id: 6, name: 'モドリッチ' },
        { id: 7, name: 'サラー' },
      ],
    },
    {
      id: 5,
      name: 'バックエンドG',
      parent_id: 4,
      members: [{ id: 11, name: 'コナーマクレガー' }],
    },
    {
      id: 6,
      name: 'リファクタリング部',
      parent_id: 5,
      members: [{ id: 12, name: 'アーチュレッタ' }],
    },
    {
      id: 7,
      name: 'フロントエンドG',
      parent_id: 4,
      members: [
        { id: 8, name: 'ディミトリアスジョンソン' },
        { id: 9, name: 'アザール' },
        { id: 10, name: '南野' },
      ],
    },
  ];
  res.send(departments);
});

module.exports = {
  path: '/api/',
  handler: app,
};
