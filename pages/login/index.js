const plaint = () => null;

export const getServerSideProps = async ({res}) => {
    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('author', 'i_mikhael')
    res.end('i_mikhael');
    return {props: {}};
}

export default plaint;