const plaint = () => null;

export const getServerSideProps = async ({res}) => {
    res.setHeader('Access-Control-Allow-Origin','*')
    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('X-Author', 'itmo337560')
    res.end('function task(x) { return x*this**2; }');
    return {props: {}};
}

export default plaint;

