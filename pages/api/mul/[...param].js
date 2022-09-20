const handler = (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    const requrl = req.url.split('/');
    res.end(JSON.stringify({result: requrl[3] * requrl[4]}));

};

export default handler;