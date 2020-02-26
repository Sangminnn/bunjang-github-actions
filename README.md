# bunjang-github-actions

## TMI

내가 직접 쓸 수 있고, 너무 어렵거나 무겁지 않으면서 도움이 될만한 프로젝트를 찾던 중

안희종 개발자님의 <GitHub Action을 사용해 새로 올라온 전월세 방 목록 받아보기> 라는 글을 보았음.

( 출처 : [https://ahnheejong.name/articles/receive-new-room-notification-mails-using-github-action/](https://ahnheejong.name/articles/receive-new-room-notification-mails-using-github-action/) )

 이건 피터팬의 좋은 방 구하기 라는 웹 페이지에서 내부 api를 이용해 원하는 정보에 대한 filter, 갱신 시간에 대한 필터를 만들어 두고, 그 검색 결과에 대한 내용을 issue 발생 후 메일이 날아오는 방식을 통해 정해진 기간마다 새로 나온 item에 대한 내용을 가지고 있는 메일을 받아 볼 수 있는 프로젝트이다.

평소에 약하다고 생각하던 git 부분과 github actions는 추후 CI/CD 관련된 내용으로 써봄직하다는 의견들이 많이 보였고, 굳이 방을 구하는 일이 아니더라도 옷에 관심이 있던 나로써는 이런 프레임에 대해 생각해 본적은 있었지만 이렇게 구현해둔 프로젝트는 처음 보았기 때문에, ts기반인 해당 프로젝트와는 다르게 js 기반으로 코드를 진행하기로 함.

먼저 spa 기반으로 database api가 있는 사이트를 찾다보니 번개장터에서 사용하는 것을 확인.

해당 api 에 대한 호출 query를 postman으로 찾아 remotes/index 에 정리하였음.

### 프로젝트 구조

프로젝트 구조는 안희종님이 하신 그대로 진행였고,

- data
    - filter - 원하는 data에 대한 filter를 적용, 번장에서는 검색어만 필요했음.
- models
    - Items - data가 들어올 때 필요한 정보만 가지고 있는 class 로 custom
- remotes
    - api 호출에 대한 코드를 담고있고, 호출 후에 갱신 기간 안에 있는 item만 return
- github.js - github actions을 통해 issue를 만들어준 부분.
- index.js -  issue 발생시에 mail로 보내줄 내용에 대한 정보 정리

### 마치면서 ...

해당 프로젝트는 github action을 사용하였기 때문에 github actions에서 동작하는데 필요한

workflow 는 안희종님이 사용하신 것과 목표가 크게 다르지 않았기 때문에, name에 대한 부분만 변경해주고 그대로 사용했음.

아침 11시마다 새로운 매물에 대한 mail이 gmail로 들어온다는 점에서 신기했고, 이 프로젝트를 진행하면서 git에 대해서 한번 더 정리하고, github actions도 맛볼수 있는 계기가 되었다.
