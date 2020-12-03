import React, { Component } from 'react';


class Home extends Component{
    constructor(props) {
        super(props)
        this.state = {
            data : [],
            date : "",
            none_like : 'https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../assets/preview/2013/png/iconmonstr-thumb-10.png&r=171&g=171&b=171',
            like : 'https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../assets/preview/2013/png/iconmonstr-thumb-10.png&r=171&g=53&b=53'
          }
    }

    
   
    render(){
        const { data, date, none_like } = this.state;
    
        return(
        
           


        <div className='other_div'>
            <div> {/* left empty*/} </div>
                <div className='Like'>
                    <img src={none_like} />
                    <h1>홈입니다</h1>
                    <h2>좋아요</h2>
                    <h3>좋아요</h3>
                    <h4>좋아요</h4>
                    <h5>좋아요</h5>
                </div>
             <div> {/* right empty*/} </div>
        </div>  



    )
}


}

export default Home;