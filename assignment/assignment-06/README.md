# 6주차

실습을 위해 가상환경 설정을 해주었다.

```bash
python -m virtualenv myvenv
source myvenv/Scripts/activate
```

위의 명령어를 통해 myvenv라는 가상환경을 만들어주고, 활성화 시켜주었다.

![Untitled](https://user-images.githubusercontent.com/99241871/169217852-21d51617-c9a5-4199-b2bf-5b2b83cd2d6e.png) 


활성화 된 모습


![Untitled (1)](https://user-images.githubusercontent.com/99241871/169217862-60e6fdbe-53fd-4cba-a0c2-d7cd7eecee76.png)


위와 같이 assginment라는 장고 프로젝트를 만들어 주었다.


![Untitled(2)](https://user-images.githubusercontent.com/99241871/169217877-ace557a4-7be2-47ea-92f5-1038caa3aab9.png)


![Untitled(3)](https://user-images.githubusercontent.com/99241871/169217891-20067a62-0765-4a4e-943f-1b3bd4c050d4.png)


이후 footprint라는 앱을 만들어 주고, INSTALLED_APPS에 등록해주었다.


![Untitled(4)](https://user-images.githubusercontent.com/99241871/169217903-675c63cc-1210-4bb9-bb27-56845659fd88.png)


URL이 127.0.0.1/footprint가 요청될 경우, footprint앱의 urls.py로 넘겨주기 위한 설정이다.


![Untitled (5)](https://user-images.githubusercontent.com/99241871/169217911-7b0b8fe5-dab4-4468-8bc4-be0960769a00.png)


위는 footprint/urls.py이다. “”가 요청되면 /footprint/views.py에 있는 footprint_GET함수를 불러온다는 설정이고, “send”가 요청되면 /footprint/views.py에 있는 footprint_POST함수가 불러와진다는 설정이다.

![Untitled (6)](https://user-images.githubusercontent.com/99241871/169217928-f35bd91c-c699-4e03-a91c-a812cbe5917e.png)

위는 footprint앱의 데이터베이스 설정이다.

1. footprint_id : Footprint라는 클래스(테이블)을 만들고, footprint_id를 생성시 자동으로 숫자가 증가하는 AutoField설정을 주고, primary_key(기본키)를 주었다.
2. receiver : receiver는 사람이름이 들어가야 하므로, TextField를 주고, null이 올 수 없게 null=False설정을 주었다.
3. message : message 역시 동일하게 텍스트가 들어가야하므로 위와 동일하게 주었다.
4. send_at : send_at은 DateTimeField라는 날짜와 시간을 기록하는 형태로 기록하며, 현재 시간과 날짜가 기록되는 auto_now_add를 설정했다. blank=False설정은 null=False와 동일하다.
    
    send_at을 주는 이유는 정렬과 더불어 서버유지/보수를 용이하게 하기 위함이다.
    

```bash
python manage.py makemigrations
python manage.py migrate
```

위 명령어를 통해 DB를 만들고, 업데이트 시켜준다.
![Untitled (7)](https://user-images.githubusercontent.com/99241871/169217958-42cf24f2-375a-4d74-97b4-e09e9daeb572.png)
![Untitled (8)](https://user-images.githubusercontent.com/99241871/169217965-a6a1f058-baec-444a-a1a0-7251c5cddb57.png)
![Untitled (9)](https://user-images.githubusercontent.com/99241871/169217981-e94a5ce5-e8ed-43f6-9fcb-7a9411c2123f.png)


views.py에서 실제로 실행될 함수를 선언해준다.

DB를 불러와야 하기때문에 footprint.models 에서 Footprint 클래스(테이블)을 import해준다.

장고는 ORM을 지원하기때문에 굳이 쿼리문을 작성하지 않아도 된다. 다만, 복잡한 쿼리문을 사용해야 할 경우에는 ORM을쓰면 굉장히 코드가 난해해 질 수 있다.

Footprint.objects라는 객체는 테이블 한 로우값을 모두 가지고 있기때문에 filter라는 함수를 통해서 원하는 컬럼값만 받아온다. filter라는 함수는 쿼리셋이라는 자료구조로 데이터를 반환한다.

쿼리셋은 인덱스로 접근할 수 있으나 리스트나 배열과는 다르다. 따라서 반복문을 사용할 때 

```bash
for x in listname:
```

의 형태로 사용할 수 없다.

order_by는 sql문과 동일하게 정렬해주는 함수다. 이후 컬럼명 앞에 -를 붙이면 컬럼을 내림차순으로 정렬한다. 

이후에는 footprints를 messages라는 리스트에 넣어서 반환해준다.

반환형태가 Json이기 때문에 위와 같이 반환형태를 작성해준다.

![제목 없음](https://user-images.githubusercontent.com/99241871/169728822-b551db24-4a23-4cee-8b8f-a92dcb11a8e8.png)

