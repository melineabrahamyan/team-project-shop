import { useNavigate } from 'react-router-dom'
import './index.css'

export default function Women(){

    const navigate=useNavigate();
    const handleNavigate=(category : string)=>{
        navigate(`${category}`)
    }
    return <div className='womens-container'>
        
        <div className='womens-special'>
            <img src='https://static.zara.net/photos///contents/mkt/spots/aw22-north-woman-coats/subhome-xmedia-51//w/1920/IMAGE-landscape-default-fill-c1292980-05e4-4eac-9a17-89b1ca6bff4f-default_0.jpg?ts=1671727026092'/>
            <div className='all-button'>
                <div onClick={()=>{handleNavigate('all')}}>WOMEN'S ALL</div>
            </div> 
        </div>

        <div className="womens-category-container">
            <div className='womens-img-container'>
                <img src='https://lp.weekday.com/app003prod?set=key[resolve.pixelRatio],value[1]&set=key[resolve.width],value[1700]&set=key[resolve.height],value[10000]&set=key[resolve.imageFit],value[containerwidth]&set=key[resolve.allowImageUpscaling],value[0]&set=key[resolve.format],value[webp]&set=key[resolve.quality],value[90]&set=ImageVersion[2],origin[dam],source[%2F44%2F38%2F4438420c17dc611ec5793d697bc3ff37ab0df382.jpg],type[LOOKBOOK]&call=url[file%3A%2Fproduct%2Fdynamic.chain]'/>
                <div onClick={()=>{handleNavigate('dresses')}}>DRESSES</div>
            </div>
            <div className='womens-img-container'>
                <img src='https://lp.weekday.com/app003prod?set=key[resolve.pixelRatio],value[1]&set=key[resolve.width],value[1700]&set=key[resolve.height],value[10000]&set=key[resolve.imageFit],value[containerwidth]&set=key[resolve.allowImageUpscaling],value[0]&set=key[resolve.format],value[webp]&set=key[resolve.quality],value[90]&set=ImageVersion[3],origin[dam],source[%2Fee%2Faa%2Feeaa84056d85072ca925dbae334120d7ff2bdaf2.jpg],type[DESCRIPTIVESTILLLIFE]&call=url[file%3A%2Fproduct%2Fdynamic.chain]'/>
                <div onClick={()=>{handleNavigate('jackets-and-coats')}}>JACKETS AND COATS</div>
            </div>
            <div className='womens-img-container'>
                <img src='https://lp.weekday.com/app003prod?set=key[resolve.pixelRatio],value[1]&set=key[resolve.width],value[1700]&set=key[resolve.height],value[10000]&set=key[resolve.imageFit],value[containerwidth]&set=key[resolve.allowImageUpscaling],value[0]&set=key[resolve.format],value[webp]&set=key[resolve.quality],value[90]&set=ImageVersion[1],origin[dam],source[%2Fe6%2Fb9%2Fe6b9ec26b7e19e8c3028e6a2ff640f2219017190.jpg],type[DESCRIPTIVESTILLLIFE]&call=url[file%3A%2Fproduct%2Fdynamic.chain]'/>
                <div onClick={()=>{handleNavigate('knitwear')}}>KNITWEAR</div>
            </div>
            <div className='womens-img-container'>
                <img src='https://lp.weekday.com/app003prod?set=key[resolve.pixelRatio],value[1]&set=key[resolve.width],value[1700]&set=key[resolve.height],value[10000]&set=key[resolve.imageFit],value[containerwidth]&set=key[resolve.allowImageUpscaling],value[0]&set=key[resolve.format],value[webp]&set=key[resolve.quality],value[90]&set=ImageVersion[1],origin[dam],source[%2Fce%2F9d%2Fce9d71d85286067e0f3b1ec15b95ccc0bfc392fd.jpg],type[LOOKBOOK]&call=url[file%3A%2Fproduct%2Fdynamic.chain]'/>
                <div onClick={()=>{handleNavigate('skirts')}}>SKIRTS</div>
            </div>
        </div>

        <div className='womens-special jeans'>
            <img src='https://lp.weekday.com/app006prod?set=width[1460],quality[90],options[limit]&source=url[https://www.weekday.com/content/dam/Weekday/startpage-content/2022/wk44/Hero1_DP_Jeans_Women.jpg]&scale=width[global.width],height[15000],options[global.options]&sink=format[webp],quality[global.quality]'/>
            <div className='special-details'>
                <h2>JEANS OBSESSION</h2>
                <div onClick={()=>{handleNavigate('jeans')}}>WOMEN'S JEANS</div>
            </div>
        </div>
    </div>
}