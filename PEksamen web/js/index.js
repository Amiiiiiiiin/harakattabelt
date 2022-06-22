const baseUrl = "https://restservice20220530114445.azurewebsites.net/api/WindData"

Vue.createApp({
    data() {
        return {
            datas: [],
            speedToGetBy: "",
        }
    },
    async created() {
        this.helperGetDatas(baseUrl)
    },
    methods: {
        async helperGetDatas(url) {
            try {
                const response = await axios.get(url)
                this.datas = await response.data
            }
            catch (ex) {
                this.datas = []
            }
        },
        getBySpeed(speed) {
            const url = baseUrl + "?speed=" + speed
            this.helperGetDatas(url)
        }
    }
}).mount("#app")