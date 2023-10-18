

export default function Curtain() {
    return(
        <div id="curtainRef" className="curtain-ref"
        style={
            {
                position:'absolute', top:'0', left:'0',
                height:'100%', width:'100%', background:'#FFF',
                zIndex:'1000', transition:'all 0.6s cubic-bezier(0.83, 0, 0.17, 1)'}} 
        />
    )
}