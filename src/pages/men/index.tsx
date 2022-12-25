import { useNavigate } from 'react-router-dom'
import './index.css'

export default function Men(){

    const navigate=useNavigate();
    const handleNavigate=(category : string)=>{
        navigate(`${category}`)
    }
    return <div className='mens-container'>

        <div className='mens-special'>
            <img src='https://static.pullandbear.net/2/cms/assets/uploads/newin_16.jpg?impolicy=pullandbear-itxmediumhigh&ts=20221225020205'/>
            <div className='all-button'>
                <div onClick={()=>{handleNavigate('all')}}>MEN'S ALL</div>
            </div> 
        </div>

        <div className="mens-category-container">
            <div className='mens-img-container'>
                <img src='https://lp.weekday.com/app003prod?set=key[resolve.pixelRatio],value[1]&set=key[resolve.width],value[1700]&set=key[resolve.height],value[10000]&set=key[resolve.imageFit],value[containerwidth]&set=key[resolve.allowImageUpscaling],value[0]&set=key[resolve.format],value[webp]&set=key[resolve.quality],value[90]&set=ImageVersion[1],origin[dam],source[%2Ff2%2F13%2Ff213b6445bf44a5a7d15c1c8ca259dcedeb973f0.jpg],type[DESCRIPTIVESTILLLIFE]&call=url[file%3A%2Fproduct%2Fdynamic.chain]'/>
                <div onClick={()=>{handleNavigate('knitwear-and-sweaters')}}>KNITWEAR AND SWEATERS</div>
            </div>
            <div className='mens-img-container'>
                <img src='https://lp.weekday.com/app003prod?set=key[resolve.pixelRatio],value[1]&set=key[resolve.width],value[600]&set=key[resolve.height],value[10000]&set=key[resolve.imageFit],value[containerwidth]&set=key[resolve.allowImageUpscaling],value[0]&set=key[resolve.format],value[webp]&set=key[resolve.quality],value[90]&set=ImageVersion[2],origin[dam],source[%2F18%2F9b%2F189b768cf32805c6cc5ae2f58a6c60cf772ccd3a.jpg],type[DESCRIPTIVESTILLLIFE]&call=url[file%3A%2Fproduct%2Fdynamic.chain]'/>
                <div onClick={()=>{handleNavigate('jackets-and-coats')}}>JACKETS AND COATS</div>
            </div>
            <div className='mens-img-container'>
                <img src='https://lp.weekday.com/app003prod?set=key[resolve.pixelRatio],value[1]&set=key[resolve.width],value[1700]&set=key[resolve.height],value[10000]&set=key[resolve.imageFit],value[containerwidth]&set=key[resolve.allowImageUpscaling],value[0]&set=key[resolve.format],value[webp]&set=key[resolve.quality],value[90]&set=ImageVersion[1],origin[dam],source[%2F2a%2Fb2%2F2ab2fdd555eb49cb84c748722a46cc9c9dd409f0.jpg],type[DESCRIPTIVESTILLLIFE]&call=url[file%3A%2Fproduct%2Fdynamic.chain]'/>
                <div onClick={()=>{handleNavigate('shirts')}}>SHIRTS</div>
            </div>
        </div>

        <div className='mens-special jeans'>
            <img src='https://lp.weekday.com/app006prod?set=width[1460],quality[90],options[limit]&source=url[https://www.weekday.com/content/dam/Weekday/startpage-content/2022/wk48/Hero_1_DP_Jeans_MENS.jpg]&scale=width[global.width],height[15000],options[global.options]&sink=format[webp],quality[global.quality]'/>
            <div className='special-details'>
                <h2>JEANS OBSESSION</h2>
                <div onClick={()=>{handleNavigate('jeans')}}>MEN'S JEANS</div>
            </div>
        </div>
    </div>
}