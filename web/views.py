from django.shortcuts import render
from . import myviews
import json

# def showmap(request, tbl_person_info_id):
#     person = TBL_PERSON_INFO.objects.get(id=tbl_person_info_id)
#     persondict = {
#         'lat': person.deviceid.latitude,
#         'lon': person.deviceid.longitude,
#         'station': person.deviceid.station
#     }
#     personJson = json.dumps(persondict)
#     return render(request, 'map copy.html', {'personJson': personJson})

def index (request):
    return render(request, 'html/index.html')

def intro (request):
    return render(request, 'html/intro.html')

def map(request):
    location_list = myviews.search_all()
    content = {'location_list': location_list}
    print(location_list)
    return render(request, 'html/map.html', content)

def list(request):
    location_list = myviews.search_all()
    content = {'location_list': location_list}
    # print(location_list)
    return render(request, 'html/list.html', content)

def detail(request):
    visit_id = request.GET.get('id')
    print(visit_id)
    result = myviews.search(visit_id)    # 클릭한 관광지 id로 데이터 조회
    # print(result)
    myviews.update(result)     # 클릭한 관광지의 view 컬럼 업데이트
    detail = myviews.search(visit_id)   # 클릭한 관광지 id로 변경된 데이터 조회
    # print(detail)
    content = {'detail': detail}
    return render(request, 'html/detail.html', content)