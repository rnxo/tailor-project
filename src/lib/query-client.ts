import { QueryClient } from '@tanstack/react-query';

// 移行が目的なので標準値のまま。staleTime などは Hono につないだときに見直す
export const queryClient = new QueryClient();
