import './App.css';

function App() {
  return (
    <div>      
      <section id="home">

        <nav>
          <a href="https://www.meram.bel.tr/">
            <img src="meramlogo.webp" alt="logo" />
          </a>
          <ul>
            <li><a href="https://www.meram.bel.tr/fotograflarla-meram" target="_self">Fotoğraflarla Meram</a></li>
            <li><a href="https://www.meram.bel.tr/kulturel" target="_self">Kültürümüz</a></li>
            <li><a href="https://www.meram.bel.tr/istek-sikayet">İstek Ve Şikayet</a></li>
          </ul>
        </nav>

        <div className="body-background"></div>
        <div className="content-wrapper">
          <div className="content">

            <div className="songs-list">
              <h1 id="list-name">Konyamızın Şarkı Ve Türküleri</h1>
              <ol className="items">
              </ol>
            </div>

            <div className="thumnail">
              <img id="thumnail" src="63ea7609869db_1676310025.jpg" alt="" />
            </div>
          </div>

          <div className="dwn-info">
            <div className="info-tab" style={{ marginBottom: "-7vw" }}>

              <p>Meram Belediyesi,</p>
              <p>İyi Keyifler</p>

              <div className="bar-full">
                <div className="bar-progress"></div>
              </div>
            </div>
          </div>

          <div className="play-tools">
            <input type="range" id="progressBar" max="100" min="0" value="0"/>

            <div className="played">00:00/05:00</div>

            <div className="controls">
              <i
                className="fa-solid fa-backward-step"
                title="Previous"
                style={{ padding: "1% 2%" }}
              ></i>
              <i className="fa-solid fa-backward" title="10s Back"></i>
              <i className="fa-solid fa-play playPause" title="Play" style={{ padding: "1% 2%" }}></i>
              <i className="fa-solid fa-forward" title="10s Forward"></i>
              <i
                className="fa-solid fa-forward-step"
                title="Next"
                style={{ padding: "1% 2%" }}
              ></i>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;