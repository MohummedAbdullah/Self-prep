
export type ApiModule = {
  id: string;
  name: string;
  description: string;
  path: string;
  icon: string;
  category: 'generic' | 'frontend' | 'backend' | 'fullstack' | 'mobile';
};

/** Base URL for selfprep-backend (no trailing slash). */
export function apiBase(): string {
  return process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, '') ?? 'http://localhost:4000';
}

export type ModulesFetchResult = {
  modules: ApiModule[];
};

/** Module catalogue from backend (no fallback). */
export async function fetchModules(): Promise<ModulesFetchResult> {
  const res = await fetch(`${apiBase()}/api/v1/modules`, { cache: 'no-store' });

  if (!res.ok) throw new Error(`Failed to fetch modules: HTTP ${res.status}`);

  const body = (await res.json()) as { modules?: ApiModule[] };

  if (!Array.isArray(body.modules) || body.modules.length === 0) {
    throw new Error('No modules data found in API response');
  }

  return { modules: body.modules };
}

/** Module payload from `GET /api/v1/modules/:id` (`content`) (no fallback). */
export async function fetchModuleContent<T>(moduleId: string): Promise<T> {
  const res = await fetch(`${apiBase()}/api/v1/modules/${moduleId}/bundle`, { cache: 'no-store' });

  if (!res.ok) {
    if (res.status === 404) throw new Error(`Module ${moduleId} not found`);
    throw new Error(`Failed to fetch module content: HTTP ${res.status}`);
  }

  const body = (await res.json()) as { content?: unknown };
  if (body.content == null) throw new Error(`No content found for module ${moduleId}`);
  return body.content as T;
}
