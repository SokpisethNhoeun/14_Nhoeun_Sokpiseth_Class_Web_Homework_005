import Page from './components/Page';
import { data } from './data/data';
function page() {
  return (
    <>
      <Page data={data} />
    </>
  );
}

export default page;
