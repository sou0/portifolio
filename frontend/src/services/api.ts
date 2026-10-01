import type { ContactFormData, ApiResponse, Project } from '../types/portfolio';

const API_BASE_URL = typeof window !== 'undefined' 
  ? (window as any).__API_BASE_URL__ || 'http://localhost:3000/api'
  : 'http://localhost:3000/api';

export class PortfolioApiService {
  /**
   * Envia o formulário de contato para o backend NestJS
   */
  static async submitContact(data: ContactFormData): Promise<ApiResponse<{ whatsappUrl?: string }>> {
    try {
      const response = await fetch(`${API_BASE_URL}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        const message = Array.isArray(errorData.message)
          ? errorData.message.join(', ')
          : errorData.message || 'Erro ao enviar mensagem.';
        throw new Error(message);
      }

      return await response.json();
    } catch (err: any) {
      return {
        success: false,
        message: err.message || 'Falha de comunicação com o servidor NestJS.',
        error: err.toString(),
      };
    }
  }

  /**
   * Consulta os projetos disponibilizados pela API NestJS
   */
  static async getProjects(): Promise<Project[]> {
    try {
      const res = await fetch(`${API_BASE_URL}/projects`);
      if (!res.ok) throw new Error('Falha ao buscar projetos');
      return await res.json();
    } catch (e) {
      console.warn('Erro ao conectar ao NestJS backend:', e);
      return [];
    }
  }

  /**
   * Checa o status do backend NestJS
   */
  static async checkHealth(): Promise<{ status: string }> {
    try {
      const res = await fetch(`${API_BASE_URL}/health`);
      return await res.json();
    } catch (e) {
      return { status: 'offline' };
    }
  }
}
