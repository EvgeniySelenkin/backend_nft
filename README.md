# NFT marketplace

Создание backend части для маркетплейса NFT с базовым функционалом.

Ссылка на heroku https://web-course-project.herokuapp.com/api/

Frontend https://kp-front-sage.vercel.app/

Для создания прототипа приложения для маркетплейса NFT выберем основной функционал, который нужно будет реализовать. Первыми функциями для любого маркетплейса являются: создание, хранение и обмен NFT, вместе с регистрацией и логином пользователей.

В прототипе будем использовать авторизацию стандартным способом, на основе хранения логина и хэшированного пароля в базе данных, а для подтверждения действий авторизованного пользователя будем передавать JWT токен в заголовке каждого запроса. 

Вернемся к функциям управления NFT карточками и опишем сущность, которую будем представлять пользователям. У каждой карточки должны быть: название, изображение, описание, ссылка на ее владельца, которого может и не быть, а также ее цена. Кроме того, сами методы для управления карточками должны быть доступны только авторизированным пользователям, за исключением возможности просмотра списка NFT и информации о них.