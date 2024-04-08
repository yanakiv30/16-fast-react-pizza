import { useFetcher } from 'react-router-dom';
import Button from '../../ui/Button';
export default function UpdateOrder({ order }) {
  const fetcher = useFetcher();
  return (
    <fetcher.Form method='PATCH' className='text-right'>
      <Button type="primary">Make Priority</Button>
    </fetcher.Form>
  );
}
