import React from 'react'
import Panel from 'muicss/lib/react/panel';

export default ({stats}) => {
    if (!stats) return <div>Loading stats...</div>
    return (
        <Panel>
            <dl>
                <dt>UsersOnline:</dt>
                <dd>{stats.onlineUsers}</dd>
            </dl>
        </Panel>
    )
}