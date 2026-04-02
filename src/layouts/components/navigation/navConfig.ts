import {
  ArrowTrendingUpIcon,
  ChartBarIcon,
  ChatBubbleLeftRightIcon,
  CurrencyDollarIcon,
  HomeIcon,
} from '@heroicons/react/24/outline'
import * as React from 'react'

export interface NavItem {
  label: string
  path: string
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

export const navItems: NavItem[] = [
  { label: 'Головна', path: '/dashboard', icon: HomeIcon },
  { label: 'Баланс', path: '/balance', icon: CurrencyDollarIcon },
  { label: 'Позиції', path: '/positions', icon: ChartBarIcon },
  { label: 'Чат', path: '/chat', icon: ChatBubbleLeftRightIcon },
  { label: 'Статистика', path: '/stats', icon: ArrowTrendingUpIcon },
]
