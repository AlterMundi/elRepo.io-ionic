import api from "../../httpHandler";

const poolUrl = 'http://pool.elrepo.io'
const poolCert = "CQEGAcOWxsFNBFrOYV8BEADXju6powNML2i4q3106d27JozGiwUdGkgUZdsu9eaf\nd5R22Wr8Fj9UTVM8H3vp/zv4pmU4Jyx5Xy/bapMf425AQrMLm6lKfpsAmnfZfDR4\nUloM7aDuZRBLNmhZYR12B7C8djzEn3UwDdrK0xd+1YH9hn+RSu1SIxrUKmQX1fJZ\nfxbzePnEApVcrafARQ8+6vNjbg708rbZlzPv+w8rnCKdtf1PGs+T/lmJH2zs2GoN\ncKL1ZUtfnf5lwk1i8ekYomv0s8L7/ue/WAE6vgsE+bng/R+ZKzS5EKym3sGo6SA5\n1/NDsJQNVSX1aEW6T/A4jRBCz/OFuAKkUB3VHK80Od+Jo/RNVUQQ3GkyHox9j/hi\npwFYaXYIoqZSUbSRD5IPm/F9TbkL0BOEMnFBrcz47BsORixAH4MybNCdgf3FTeJp\nMZ5yiRI3ZOmPQFHHN50i6BgCPXhin2V4/GmcNuQAm7+50+qvcmmHW9r00rtV4C1R\nflpKvF7EkCWUnsTuWy87zbM34+cWJ5crVMBTcv5XFAEpVnW9kTVYPnMCtNAVuAHQ\nNdLicBd5bKzRnthKvAJkmwbPivN1i8cgwqfDaOD+58pHDKOKkqmB0YtebxsmOKjz\nCG98IJsmlkTj16zWD53OB0ayi7sfa5R+dr0OOrlyyssOWvG27ZZlccbKDEDjRTJP\nUQARAQABzSJUaWVyMSAoR2VuZXJhdGVkIGJ5IFJldHJvU2hhcmUpIDw+wsFfBBMB\nAgATBQJazmFfCRB3bcLhYiNTXAIZAQAAGwQQANMG5+Hlw8gPAow0U2aGKvUT9MFP\nLzYuSkCuQnCggZ/3grmDR21qfwIHMlI1TWR5AtxlWk4MlOjB7UGSXjyBbmRQw48+\n5Ec1UOKCQX9dsZhuLbyb4K3oN7qGKMH9pZOPpoQgjnsyl5npZUYzPjXC1Bnm7tjG\n34SpoggBl/ez4Nnakjq6fG4NrfilswnaE27J1FJTcf/QMNa1FxreJRu3GkDHGsII\no6yZ7JXvCOlPURMVbDakF656T3ORQlZ5y73kMcS3NErYc0E7Z1ObGAwUgAMEzYyP\nvr/Pn5XqQThZuDtpAVvvrbRHltKVoX//XIdg3kYMqS2e+OuYls86VldhGDBSiIb8\nYU5ltgfrAI8X7zdL8IHCY8AFSgUF6l42QHxpw8f83RlK33I3klPSJfuMw/n63EzM\n3bAtgyR6pGxXMhPKyoL4kgl3Lg/gniYSx8GJS3ugBGuE6NF3Zdg2m81fL9V3cxHO\nj2YJg24W6uui5XoiHfjLPZa4RAIE+szcYJABNpsld6D+ibH3Q8aPbLF8zsMhSQIw\n9p/D1HtskutmMVz+nyEhb4S/qUjZ0NsGO0+u6Jo8Ue2wvQ1KoleGZXwpRXDlPXgr\n8avtqZqJVzUIHvTNBolA2ARkX1A1oEXbWAeslIYtwUS4JHMqQMhYj2aeEQe2B/SN\nMuNNrVezmagJGP7HAgYzS4yQAFADBgoBmC0fkAQbbWljaGVsZWFuZ2lvbGlsbG8u\nZWxyZXBvLmlvBhFtaWNoZWxlYW5naW9saWxsbwUQB6J6iqgl1SnyCBkGRGegYQoX\naXB2NDovLzEwLjEuMTUyLjQ1OjgwODAKF2lwdjQ6Ly81MS43NS4xNDAuMTQ0Ojgw\nCjFpcHY2Oi8vWzJhMDA6MTUwODoxOmYwMTc6MjhhNTpjZmZmOmZlMGI6NGJjXTo4\nMDgwBwMsrNM="

export const joinTiers = async() => {
    
    const { GetRetroshareInvite, acceptInvite } = api.endpoints().rsPeers
     
    try {
        const { retval } = await GetRetroshareInvite({ sslId: api.state.user.mLocationId })
        const local = await acceptInvite({invite: poolCert })

        if (local.retval) {
            const remote =  await fetch(poolUrl+'/rsPeers/acceptInvite', {
                body: JSON.stringify({
                    invite: retval
                }),
                headers: {'content-type': 'application/json'},
                method: 'POST'
            }).then(res => res.json())

            if (remote.retval) { return }
        }

    }
    
    catch(e) {
        console.log('Error on tier1 peering', e)
    }

}
