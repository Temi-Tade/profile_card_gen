class ProfileCard{
    constructor(obj){
        this.name = obj.name
        this.dob = obj.dob
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
            var dataURL = canvas.toDataURL();

            const img = document.createElement('img');
            img.src = dataURL;
            let image_link = document.createElement('a')
            let image_file = new Blob([dataURL], {type: "image/png"})
            image_link.href = URL.createObjectURL(image_file)
            image_link.download = `${USER_INFO.names}.png`
            image_link.click()
            URL.revokeObjectURL(image_link.href)
            document.querySelector("#card-wrap").append(img)
        });
    }
}