import { format } from 'date-fns';

import { fetchItems } from "./remotes";
import createIssue from './github';
import candidates from './data/candidates';

async function main() {
  const sections = [];

  await Promise.all(
    candidates.map(async candidate => {
      const items = await fetchItems(candidate);
      const section = [
        `# ${candidate.id}: ${items.length}개`,
        "",
        ...items.map(
          ({
            name,
            pid,
            price,
            image,
            updateTime
          }) => {
            const name = `## [${name}]`;
            const image = `<img src=${image} />`;
            const price = `${price} 원`;
            
            return [
              name,
              image,
              "",
              ` | 제목 | 가격 |`,
              ` |  -  |  -  |`,
              ` | ${name} | ${price} |`,
            ].join("\n");
          }
        )
      ].join("\n");

      sections.push(section);
    })
);

  const body = sections.join("\n\n");
  createIssue(`${format(Date.now(), "yyyy-MM-dd")}일 새로 올라온 방`, body);
};

main();