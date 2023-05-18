export default {
    'GET /api/xxx/getXXX': (req: any, res: any) => {
        res.json({});
    },
    'POST /api/xxx/setXXX': (req: any, res: any) => {
        res.json({});
    },
    // 当 Http 的请求方法是 GET 时，可以省略方法部分，只需要路径即可
    '/api/users': [
        { id: 1, name: 'foo' },
        { id: 2, name: 'bar' },
    ],
    '/api/users/1': { id: 1, name: 'foo' },
    'POST /api/users': { result: 'true' },
    'PUT /api/users/1': { id: 1, name: 'new-foo' },
};
