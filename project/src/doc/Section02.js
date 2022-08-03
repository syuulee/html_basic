import '../css/section02.css';

const Section02 = () => {
    return (
        <section className="Business">
            <h2><span className="mainColor">our</span> business</h2>
            <p>새로운 미래를 열어가는 갈라파고스거북이</p>
            <div className="container">
                <figure>
                    <div className="inbox">
                        <img src="../img/hd01.jpg" alt="" />
                    </div>
                    <div className="cover">
                        <h3>주요사업 1</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, esse.</p>


                        <a href="">자세히보기 .....</a>
                    </div>
                </figure>
                <figure>
                    <div className="inbox">
                        <img src="../img/hd04.jpg" alt="" />
                    </div>
                    <div className="cover">
                        <h3>주요사업 1</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, esse.</p>


                        <a href="">자세히보기</a>
                    </div>
                </figure>
                <figure>
                    <div className="inbox">
                        <img src="../img/hd01.jpg" alt="" />
                    </div>
                    <div className="cover">
                        <h3>주요사업 1</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, esse.</p>


                        <a href="">자세히보기</a>
                    </div>
                </figure>
                <figure>
                    <div className="inbox">
                        <img src="../img/hd04.jpg" alt="" />
                    </div>
                    <div className="cover">
                        <h3>주요사업 1</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, esse.</p>


                        <a href="">자세히보기</a>
                    </div>
                </figure>
            </div>
            <div className="inner">
                <div className="tit">
                    <strong>심플하지만 다 갖춘 갈라파고스거북이</strong>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure minus eveniet quam.</p>
                </div>
                <div className="list">
                    <ul className="dotList">
                        <li>Lorem ipsum dolor sit amet, </li>
                        <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure minus eveniet quam. </li>
                        <li>elit. nostrum.</li>
                        <li>Vero, esse.</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Section02;