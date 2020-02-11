import axios from 'axios';
import { stringify } from 'query-string';
import Item from '../models/Items';

const apiEndpoint = 'https://api.bunjang.co.kr/api/1/find_v2.json';

export async function fetchItems(candidate) {
  // api 에 들어가는 코드들을 분석한 결과 q만 search data로 변경
  // 정확한 request-id 는 모르겠지만 성공코드를 따왔음.
  const query = {
    q: candidate,
    order: 'date',
    page: 0,
    request_id: 2020208153534,
    stat_uid: 7823918,
    stat_device: 'w',
    n: 100,
    stat_category_required: 1,
    req_ref: 'search',
    version: 4
  }

  const url = `${apiEndpoint}?${stringify(query)}`;

  const { data } = await axios.get(url, {
    headers: { "content-type": "application/json" },
  });

  const { list } = data;

  return list.map(payload => new Item(payload)).filter(item => item.isNew);
}