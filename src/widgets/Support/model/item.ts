import { ISupportItem, IProblemItem } from './types'

export const supportItems: ISupportItem[] = [
    {
        id: 1,
        ticketNumber: "#19315",
        subjectOfAppeal: "Problem with recieving money",
        lastUpdate: "01.05.2020 14:55",
        response: "Response from support",
        responseNumber: "3",
        responseType: "response",
        messagesList: [
            {
                avatarUrl: '/images/avatars/1.jpg',
                name: 'Boface',
                message: 'Aliquam erat volutpat. Sed odio ligula, faucibus vitae varius ut, bibendum quis sem. Phasellus nec lorem et erat varius finibus non vitae ante. Aenean sit amet imperdiet ligula, malesuada maximus dui.',
                type: 'my',
                timestamp: '15:28'
            },
            {
                avatarUrl: '/images/avatars/2.jpg',
                name: 'Aleksandr',
                message: 'Aliquam erat volutpat. Sed odio ligula, faucibus vitae varius ut, bibendum quis sem. Phasellus nec lorem et erat varius finibus non vitae ante. Aenean sit amet imperdiet ligula, malesuada maximus dui.',
                type: 'admin',
                timestamp: '15:28'
            },
        ]
    },
    {
        id: 2,
        ticketNumber: "#19315",
        subjectOfAppeal: "Problem with recieving money",
        lastUpdate: "01.05.2020 14:55",
        response: "Under consideration",
        responseType: "consideration",
        messagesList: [
            {
                avatarUrl: '/images/avatars/1.jpg',
                name: 'Boface',
                message: 'Aliquam erat volutpat. Sed odio ligula, faucibus vitae varius ut, bibendum quis sem. Phasellus nec lorem et erat varius finibus non vitae ante. Aenean sit amet imperdiet ligula, malesuada maximus dui.',
                type: 'my',
                timestamp: '15:28'
            },
            {
                avatarUrl: '/images/avatars/2.jpg',
                name: 'Aleksandr',
                message: 'Aliquam erat volutpat. Sed odio ligula, faucibus vitae varius ut, bibendum quis sem. Phasellus nec lorem et erat varius finibus non vitae ante. Aenean sit amet imperdiet ligula, malesuada maximus dui.',
                type: 'admin',
                timestamp: '15:28'
            },
        ]
    },
    {
        id: 3,
        ticketNumber: "#19315",
        subjectOfAppeal: "Problem with recieving money",
        lastUpdate: "01.05.2020 14:55",
        response: "Response from support",
        responseNumber: "3",
        responseType: "response",
        messagesList: [
            {
                avatarUrl: '/images/avatars/1.jpg',
                name: 'Boface',
                message: 'Aliquam erat volutpat. Sed odio ligula, faucibus vitae varius ut, bibendum quis sem. Phasellus nec lorem et erat varius finibus non vitae ante. Aenean sit amet imperdiet ligula, malesuada maximus dui.',
                type: 'my',
                timestamp: '15:28'
            },
            {
                avatarUrl: '/images/avatars/2.jpg',
                name: 'Aleksandr',
                message: 'Aliquam erat volutpat. Sed odio ligula, faucibus vitae varius ut, bibendum quis sem. Phasellus nec lorem et erat varius finibus non vitae ante. Aenean sit amet imperdiet ligula, malesuada maximus dui.',
                type: 'admin',
                timestamp: '15:28'
            },
        ]
    },
    {
        id: 6,
        ticketNumber: "#19315",
        subjectOfAppeal: "Problem with recieving money",
        lastUpdate: "01.05.2020 14:55",
        response: "Ticket closed",
        responseType: "closed",
        messagesList: [
            {
                avatarUrl: '/images/avatars/1.jpg',
                name: 'Boface',
                message: 'Aliquam erat volutpat. Sed odio ligula, faucibus vitae varius ut, bibendum quis sem. Phasellus nec lorem et erat varius finibus non vitae ante. Aenean sit amet imperdiet ligula, malesuada maximus dui.',
                type: 'my',
                timestamp: '15:28'
            },
            {
                avatarUrl: '/images/avatars/2.jpg',
                name: 'Aleksandr',
                message: 'Aliquam erat volutpat. Sed odio ligula, faucibus vitae varius ut, bibendum quis sem. Phasellus nec lorem et erat varius finibus non vitae ante. Aenean sit amet imperdiet ligula, malesuada maximus dui.',
                type: 'admin',
                timestamp: '15:28'
            },
        ]
    },
    {
        id: 5,
        ticketNumber: "#19315",
        subjectOfAppeal: "Problem with recieving money",
        lastUpdate: "01.05.2020 14:55",
        response: "Ticket closed",
        responseType: "closed",
        messagesList: [
            {
                avatarUrl: '/images/avatars/1.jpg',
                name: 'Boface',
                message: 'Aliquam erat volutpat. Sed odio ligula, faucibus vitae varius ut, bibendum quis sem. Phasellus nec lorem et erat varius finibus non vitae ante. Aenean sit amet imperdiet ligula, malesuada maximus dui.',
                type: 'my',
                timestamp: '15:28'
            },
            {
                avatarUrl: '/images/avatars/2.jpg',
                name: 'Aleksandr',
                message: 'Aliquam erat volutpat. Sed odio ligula, faucibus vitae varius ut, bibendum quis sem. Phasellus nec lorem et erat varius finibus non vitae ante. Aenean sit amet imperdiet ligula, malesuada maximus dui.',
                type: 'admin',
                timestamp: '15:28'
            },
        ]
    }
]

export const problems: IProblemItem[] = [
    {
        id: 1,
        type: 'create_new_ticket.issue_with_withdraw'
    },
    {
        id: 2,
        type: 'create_new_ticket.issue_with_withdraw'
    },
    {
        id: 3,
        type: 'create_new_ticket.issue_with_withdraw'
    },
    {
        id: 4,
        type: 'create_new_ticket.issue_with_withdraw'
    }
]