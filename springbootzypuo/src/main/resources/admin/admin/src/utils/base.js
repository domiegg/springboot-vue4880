const base = {
    get() {
        return {
            url : "http://localhost:8080/springbootzypuo/",
            name: "springbootzypuo",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springbootzypuo/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "企业客户信息反馈平台"
        } 
    }
}
export default base
