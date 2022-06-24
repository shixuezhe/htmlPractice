window.onload = function() {
    let hiddenPopUps = {
        template: '#hiddenPopUps',
        methods: {
            clickClose: function() {
                this.$emit('close');
            }
        }
    }
    let vm = new Vue({
        el: "#app",
        data: {
            isShow: false
        },
        components: {
            hide: hiddenPopUps
        },
        methods: {
            show: function() {
                console.log('click');
                this.isShow = true;
            },
            closePop: function() {
                this.isShow = false;
            }
        }
    })
}