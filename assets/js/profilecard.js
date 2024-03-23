class ProfileCard{
    constructor(obj){
        this.name = obj.name
        this.gndr = obj.gndr
        this.mail = obj.mail
        this.phone = obj.phone
        this.skills = obj.skills
        this.bio = obj.bio
    }

    //in future releases,
    //there should be a feature requesting for jpg or png download
    //embedding in social handles using their APIs
    //sharable links
    create = () => {
        let element = document.querySelector("#card")
        var canvas = document.createElement('canvas');
        canvas.width = element.offsetWidth;
        canvas.height = element.offsetHeight;
        html2canvas(element, {}).then(function (canvas) {
            var ctx = canvas.getContext('2d');
            ctx.drawImage(canvas, 0, 0);
            ctx.imageSmoothingQuality = "high"
            let dataURL = canvas.toDataURL();
            let img_link = document.createElement("a")
            img_link.href = dataURL
            img_link.download = `${USER_INFO.names}.png`
            img_link.click()
            img_link.remove()
            CREATE_MODAL("Your profile card should start downloading soon...") 
        });
    }
}