import React from 'react'

export interface FaqBarItemType {
    content: string
    icon: React.FC<React.SVGProps<SVGSVGElement>>
}

export interface FaqDataType {
    content: string
    title: string
}

