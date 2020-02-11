import "regenerator-runtime/runtime";

import { fetchItems } from "./remotes";
import createIssue from './github.js';
import candidates from './data/candidates';

async function main() {
  const sections = [];

  await Promise.all(
    candidates.map(async candidate => {
      const items = await fetchItems(candidate);
      const section = [
        `# 오늘올라온 매물: ${items.length}개`,
        "",
        ...items.map(
          ({
            name,
            pid,
            price,
            productImage,
            updateTime
          }) => {
            const title = `## [${name}]`;
            const thumbnail = `<img src=${productImage} />`;
            const kprice = `${price} 원`;
            
            return [
              title,
              thumbnail,
              "",
              ` | 제목 | 가격 |`,
              ` |  -  |  -  |`,
              ` | ${name} | ${kprice} |`,
            ].join("\n");
          }
        )
      ].join("\n");

      sections.push(section);
    })
);

  const body = sections.join("\n\n");
  const time = Date.now();
  createIssue(`${new Date(time).toISOString().slice(0, 10)}일 새로 올라온 방`, body);
};

main();