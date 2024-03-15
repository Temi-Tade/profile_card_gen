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

    create = () => {
        let element = document.querySelector("#card")
        var canvas = document.createElement('canvas');
        canvas.width = element.offsetWidth;
        canvas.height = element.offsetHeight;
        html2canvas(element, {}).then(function (canvas) {
            var ctx = canvas.getContext('2d');
            ctx.drawImage(canvas, 0, 0);
            var dataURL = canvas.toDataURL();
            console.log(dataURL);

            const img = document.createElement('img');
            img.src = dataURL;
            document.body.appendChild(img);
        });
    }
}