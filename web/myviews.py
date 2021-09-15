import pymysql

# 클래스 생성
class Location:
    def __init__(self, id, area1, area2, title, overview, tel, use_time, address, xpoint, ypoint, link, image, category, views):
        self.id = id
        self.area1 = area1
        self.area2 = area2
        self.title = title
        self.overview = overview
        self.tel = tel
        self.use_time = use_time
        self.address = address
        self.xpoint = xpoint
        self.ypoint = ypoint
        self.link = link
        self.image = image
        self.category = category
        self.views = views
        pass
    pass

# connection 연결
def mysql_connect():
    con = pymysql.connect(host='localhost',
                          user='root',
                          password='vkdl1216',
                          db='sba',
                          port=3306,
                          charset='utf8',
                          autocommit=True)
    return con

# map.html 에 관광지 전체 조회
def search_all():
    con = mysql_connect()
    cursor = con.cursor()
    sql = "SELECT * FROM untactList ORDER BY views ASC"
    # 오름차순 정렬
    cursor.execute(sql)
    res = cursor.fetchall()
    location_list = []
    for data in res:
        l = Location(data[0], data[1], data[2], data[3], data[4], data[5], data[6], data[7], data[8], data[9], data[10], data[11], data[12], data[13])
        location_list.append(l)
        # print(data, end=',')
    con.commit()
    con.close()
    return location_list

# detail.html 에 특정 관광지 상세정보 조회
def search(v_id):
    con = mysql_connect()
    cursor = con.cursor()

    sql = 'SELECT * FROM untactList WHERE id = %s'
    cursor.execute(sql, v_id)
    data = cursor.fetchone()
    detail = Location(data[0], data[1], data[2], data[3], data[4], data[5], data[6], data[7], data[8], data[9], data[10], data[11], data[12], data[13])
    # print(detail.use_time)
    con.commit()
    con.close()
    return detail

# 관광지 상세화면 조회시, 누적 조회수 변경
def update(location):
    con = mysql_connect()
    cursor = con.cursor()
    u_sql = f'UPDATE untactList SET views = {location.views}+1 WHERE id = {location.id}'
    cursor.execute(u_sql)
    con.commit()
    # print("누적횟수 : ", location.views+1, "관광지 id : ", location.id)
    con.close()
