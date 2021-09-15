import requests

keyword = URLEncoder.encode('강원', "UTF-8");
testApi = 'http://api.visitkorea.or.kr/openapi/service/rest/KorService/searchKeyword?\
ServiceKey=rQ3TVDoa8gq%2BYDO9EqMCE33uKe74u52%2FoW85GbbPgNXSCNxjulgULthuzIC8l051NvPvzVhqRRu6QT2H2R%2F%2Fyw%3D%3D\
&keyword=%EA%B0%95%EC%9B%90&\
MobileOS=ETC&MobileApp=AppTest&_type=json'

print(requests.get(testApi).json())