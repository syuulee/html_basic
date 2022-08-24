const Section01 = () => {
    return (
        <section className="about basicSection">
            <h2><span className="mainColor">CEO's</span> GREETINGS</h2>
            <p>새로운 미래를 열어가는 갈라파고스거북이</p>
            <div className="container">
                <div className="des">
                    <p className="tit">웹서비스의 <span className="mainColor">새로운 미래를</span><br />
                        <span className="mainColor">갈라파고스거북이</span>가 만들어 가겠습니다
                    </p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />Atque quae eaque quos nihil, nobis
                        architecto repudiandae alias illum. Harum, error!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />Consequatur itaque reiciendis dolor
                        dolore atque.<br /> Atque asperiores ex vero nulla doloremque suscipit incidunt? Nihil, temporibus
                        aliquid.
                    </p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />Cum recusandae voluptatem quae non
                        eius aperiam.</p>
                    <p>갈라파고스거북이들 일동</p>
                </div>
                <figure>
                    <img src="../img/hd01.jpg" alt="" />
                </figure>
            </div>
            <div className="inner pd15">
                <h3>주요현황</h3>
                <table className="table">
                    <tr>
                        <th>주 소</th>
                        <td>태양계 우리은하구 토성시 타이탄로 378번길 675</td>
                    </tr>
                    <tr>
                        <th>전화번호</th>
                        <td>9.537 070 32</td>
                    </tr>
                </table>
            </div>
        </section>
    )
}

export default Section01;