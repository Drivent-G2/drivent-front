import useAsync from '../useAsync';
import useToken from '../useToken';
import * as ticketsTypeApi from '../../services/ticketsTypeApi';

export default function useTicketsType() {
  const token = useToken();

  const ticketsTypeList = useAsync(() => ticketsTypeApi.getTicketsType(token));

  return ticketsTypeList.data;
};
