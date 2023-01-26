import Footer from "../components/footer"
export default function Home(){
    return(
        <div>
        <div className="container-md mt-4">
        <div className="container-md-fluid d-md-flex gap-4 mb-4">
          <img src="https://images-na.ssl-images-amazon.com/images/I/41g8yeF0NWL._SL500_AC_SS350_.jpg" />
          <div className="container-fluid d-flex flex-column justify-content-center">
              <h1>Танилцуулга</h1>
              <p>"Эрч Гранд" авто сервисийн албан ёсны сайтад тавтай морилно уу! Манай автозасварын газар нь 2009 оноос эхлэн автозасвар үйлчилгээ, автосэлбэгийн худалдаа эрхлэх чиглэлээр үйл ажиллагаа явуулж эхэлсэн бөгөөд олон жилийн туршлагатай хамт олон танд үйлчлэхэд бэлэн</p>
              </div>
              <div className="timeTable d-flex flex-column align-items-center justify-content-center">
                <h3 className="text-center">Бүх өдөр</h3>
                <h4>9:00-19:00</h4>
          </div>
        </div>
        <div className="container-md d-flex flex-column-reverse gap-4 flex-md-row mb-4">
          <div className="container-fluid d-flex flex-column justify-content-center">
              <h1>Тэнхлэг Тохиргоо</h1>
              <p>Манай тэнхлэг тохиргоо дараах давуу талтай. Үүнд:
                -Автомашины жин харгалзахгүй.
                -Автомашины урт харгалзахгүй.
                -Автомашины өргөн харгалзахгүй.
                -Автомашины марк хамаарахгүй. 
                -Автомашины төрөл хамаарахгүй.
                 Тэнхлэг тохиргоо олон жил хийсэн дадлага, туршлагатай механикчид үйлчилж байна. 
                 Бусад засварын газарт багтаж үйлчлүүлэх боломжгүй автобус, ачааны автомашин, том оврын болон тусгай тоноглолтой, нэмэлт тоноглолтой автомашинд тэнхлэг тохиргоо хийдэг давуу талтай болно. Тухайлбал: Лимузин, HAMMER, ..</p>
          </div>
          <img src="https://images-na.ssl-images-amazon.com/images/I/41g8yeF0NWL._SL500_AC_SS350_.jpg" />
      </div>
        <div className="container-md-fluid d-md-flex gap-4 mb-4">
          <img src="https://images-na.ssl-images-amazon.com/images/I/41g8yeF0NWL._SL500_AC_SS350_.jpg" />
          <div className="container-fluid d-flex flex-column justify-content-center">
              <h1>Смарт Оношлогоо</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec euismod gravida nulla rhoncus dictum. Malesuada rutrum facilisis non gravida dolor velit, metus, elementum. Aenean in pharetra vitae condimentum.</p>
          </div>
        </div>
        <div className="container-md-fluid d-flex flex-column-reverse gap-4 flex-md-row mb-4">
          <div className="container-fluid d-flex flex-column justify-content-center">
              <h1>Компьютер Оношлогоо</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec euismod gravida nulla rhoncus dictum. Malesuada rutrum facilisis non gravida dolor velit, metus, elementum. Aenean in pharetra vitae condimentum.</p>
          </div>
          <img src="https://images-na.ssl-images-amazon.com/images/I/41g8yeF0NWL._SL500_AC_SS350_.jpg" />
      </div>
      <hr></hr>
    </div>
    <div className="container-md-fluid d-lg-flex justify-content-center p-5 gap-4">
      <div className="d-sm-flex justify-content-center gap-4">
      <div className="card">
  <div className="card-body d-flex justify-content-center align-items-center flex-column">
  <i className="bi bi-car-front-fill" style={{fontSize: "5rem",color: "cornflowerblue"}}></i>
    <h5 className="card-title">Чанартай үйлчилгээ</h5>
  </div>
</div>
<div className="card">
  <div className="card-body d-flex justify-content-center align-items-center flex-column">
  <i className="bi bi-tools" style={{fontSize: "5rem",color: "cornflowerblue"}}></i>
    <h5 className="card-title">Сайн багаж, төхөөрөмж</h5>
  </div>
</div>
      </div>
      <div className="d-sm-flex justify-content-center gap-4">
      <div className="card">
      <div className="card-body d-flex justify-content-center align-items-center flex-column">
  <i className="bi bi-lightning-fill" style={{fontSize: "5rem",color: "cornflowerblue"}}></i>
    <h5 className="card-title">Хурдан шуурхай</h5>
  </div>
</div>
<div className="card">
<div className="card-body d-flex justify-content-center align-items-center flex-column">
  <i className="bi bi-person-fill-check" style={{fontSize: "5rem",color: "cornflowerblue"}}></i>
    <h5 className="card-title">Мэргэжлийн засварчид</h5>
  </div>
</div>
      </div>
    </div>
    <Footer/>
        </div>
    )
}