

function memberList(id: number) {
    fetch ('/api/projectOnUser/${id}', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    }).then(res => {
        if (res.ok) {
            console.log('success');
        } else {
            console.log(res);
        }
    }).catch(err => {
        console.log(err);
    });
}

const teamList = (id: number) => {
    const member = memberList(id);
    return (
        <div>
            <h1>Team List</h1>
        </div>
    )
}