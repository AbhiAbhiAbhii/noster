

export default function Curtain() {
    return(
        <div id="curtainRef" className="curtain-ref"
        style={
            {
                position:'absolute', top:'0', left:'0',
                height:'100%', width:'100%', background:'#FFF',
                zIndex:'100', transition:'all 0.6s cubic-bezier(0.90,0.00,0.10,1.00)'}} 
        />
    )
}