const plaint = () => null;

export const getServerSideProps = async ({res}) => {
  res.setHeader('Access-Control-Allow-Origin','*')
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('X-Author', 'i_mikhael')
  res.end('i_mikhael');
  return {props: {}};
}

export default plaint;