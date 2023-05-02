
//functionpour couper un texte en plusieurs morceaux si \n
function cutString(string) {
    let str = string;
    let cut = str.split('\n');
    return cut.map((item, index) => (
        <>
            <p key={index}>{item}</p>
        </>
    ))
}

export {
    cutString
}