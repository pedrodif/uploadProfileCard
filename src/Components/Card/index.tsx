import style from "./style.module.scss";
import coverImg from "../../assets/imgs/bg-pattern-card.svg";
import userImg from "../../assets/imgs/image-user.jpg";
import backgImgTop from "../../assets/imgs/bg-pattern-top.svg";
import backgImgBottom from "../../assets/imgs/bg-pattern-bottom.svg";

//É necessário sempre nomear com style.modules.scss e o import é feito da forma que foi feito acima. 
//E o seu uso é feito conform está feito abaixo na linha 9, entre chaves, usando o nome do arquivo.nome da classe 
//definida no css, não devemos usar o hífen, pode usar underline e camelCase  

//Usar imagens como componente, não precisa da tag img

function Card(){
    return(
        <div className={style.container}>
            {/* <img src={backgImgTop} alt="Imagem fundo" className={style.backgImgTop} />
            <img src={backgImgBottom} alt="Imagem fundo" className={style.backgImgBottom} /> */}

            <div className={style.card}>
                <img src={coverImg} alt="Imagem de Capa" className={style.coverImg}/>
                <img src={userImg} alt="Foto do Usuário" className={style.userImg} />

                <div className={style.header}>
                    <h3>Victor Crest</h3>
                    <p className={style.age}>26</p>
                </div>

                <p className={style.city}>London</p>
                
                <div className={style.main}>

                    <div className={style.mainBox}>

                        <div className={style.boxes}>
                            <h3>80K</h3>
                            <span className={style.boxesText}>Followers</span>
                        </div>

                        <div className={style.boxes}>
                            <h3>803K</h3>
                            <span className={style.boxesText}>Likes</span>
                        </div>

                        <div className={style.boxes}>
                            <h3>1.4K</h3>
                            <span className={style.boxesText}>Photos</span>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}

export default Card; 