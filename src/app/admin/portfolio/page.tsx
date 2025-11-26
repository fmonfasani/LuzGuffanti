// src/app/admin/portfolio/page.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Edit, Trash2, Save, X } from "lucide-react";

interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  thumbnailUrl: string;
  videoUrl?: string;
  isActive: boolean;
  order: number;
}

const MOCK_ITEMS: PortfolioItem[] = [
  {
    id: "1",
    title: "Campaña Verano Hotel",
    category: "TURISMO",
    thumbnailUrl: "/portfolio/1.jpg",
    isActive: true,
    order: 1,
  },
  {
    id: "2",
    title: "Reel Producto Tech",
    category: "REELS",
    thumbnailUrl: "/portfolio/2.jpg",
    isActive: true,
    order: 2,
  },
];

export default function AdminPortfolio() {
  const [items, setItems] = useState<PortfolioItem[]>(MOCK_ITEMS);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const [formData, setFormData] = useState<Partial<PortfolioItem>>({});

  const handleCreate = () => {
    setIsCreating(true);
    setEditingId(null);
    setFormData({
      title: "",
      category: "REELS",
      thumbnailUrl: "",
      isActive: true,
      order: items.length + 1,
    });
  };

  const handleEdit = (item: PortfolioItem) => {
    setEditingId(item.id);
    setIsCreating(false);
    setFormData(item);
  };

  const handleSave = () => {
    if (isCreating) {
      const newItem: PortfolioItem = {
        id: Date.now().toString(),
        title: formData.title || "",
        category: formData.category || "REELS",
        thumbnailUrl: formData.thumbnailUrl || "",
        videoUrl: formData.videoUrl,
        isActive: formData.isActive ?? true,
        order: formData.order || items.length + 1,
      };
      setItems([...items, newItem]);
    } else if (editingId) {
      setItems(
        items.map((item) =>
          item.id === editingId
            ? ({ ...item, ...formData } as PortfolioItem)
            : item
        )
      );
    }

    handleCancel();
  };

  const handleDelete = (id: string) => {
    if (confirm("¿Eliminar este item?")) {
      setItems(items.filter((item) => item.id !== id));
    }
  };

  const handleCancel = () => {
    setEditingId(null);
    setIsCreating(false);
    setFormData({});
  };

  const isEditing = editingId !== null || isCreating;

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-yellow-50 to-pink-100 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-5xl font-black text-gray-800 mb-2">
              ADMIN PORTFOLIO
            </h1>
            <p className="text-gray-600">Gestionar proyectos del portfolio</p>
          </div>

          {!isEditing && (
            <button
              onClick={handleCreate}
              className="bg-gray-800 text-white px-6 py-3 rounded-full font-bold flex items-center gap-2 hover:scale-105 transition-transform"
              data-testid="create-button"
            >
              <Plus className="w-5 h-5" />
              Nuevo Proyecto
            </button>
          )}
        </div>

        {/* Form */}
        {isEditing && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl p-6 mb-8 shadow-lg"
            data-testid="edit-form"
          >
            <h2 className="text-2xl font-bold mb-4">
              {isCreating ? "Crear Proyecto" : "Editar Proyecto"}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold mb-2">TÍTULO</label>
                <input
                  type="text"
                  value={formData.title || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-gray-800 outline-none"
                  data-testid="input-title"
                />
              </div>

              <div>
                <label className="block text-sm font-bold mb-2">
                  CATEGORÍA
                </label>
                <select
                  value={formData.category || "REELS"}
                  onChange={(e) =>
                    setFormData({ ...formData, category: e.target.value })
                  }
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-gray-800 outline-none"
                  data-testid="input-category"
                >
                  <option value="REELS">Reels</option>
                  <option value="BRANDING">Branding</option>
                  <option value="TURISMO">Turismo</option>
                  <option value="INSTITUCIONAL">Institucional</option>
                  <option value="LIFESTYLE">Lifestyle</option>
                  <option value="ECOMMERCE">Ecommerce</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold mb-2">
                  URL THUMBNAIL
                </label>
                <input
                  type="text"
                  value={formData.thumbnailUrl || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, thumbnailUrl: e.target.value })
                  }
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-gray-800 outline-none"
                  data-testid="input-thumbnail"
                />
              </div>

              <div>
                <label className="block text-sm font-bold mb-2">
                  URL VIDEO (opcional)
                </label>
                <input
                  type="text"
                  value={formData.videoUrl || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, videoUrl: e.target.value })
                  }
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-gray-800 outline-none"
                  data-testid="input-video"
                />
              </div>

              <div>
                <label className="block text-sm font-bold mb-2">ORDEN</label>
                <input
                  type="number"
                  value={formData.order || 0}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      order: parseInt(e.target.value),
                    })
                  }
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-gray-800 outline-none"
                  data-testid="input-order"
                />
              </div>

              <div className="flex items-center">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.isActive ?? true}
                    onChange={(e) =>
                      setFormData({ ...formData, isActive: e.target.checked })
                    }
                    className="mr-2"
                    data-testid="input-active"
                  />
                  <span className="font-bold">Activo</span>
                </label>
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <button
                onClick={handleSave}
                className="bg-gray-800 text-white px-6 py-2 rounded-full font-bold flex items-center gap-2 hover:bg-gray-900"
                data-testid="save-button"
              >
                <Save className="w-4 h-4" />
                Guardar
              </button>
              <button
                onClick={handleCancel}
                className="bg-gray-200 text-gray-800 px-6 py-2 rounded-full font-bold flex items-center gap-2 hover:bg-gray-300"
                data-testid="cancel-button"
              >
                <X className="w-4 h-4" />
                Cancelar
              </button>
            </div>
          </motion.div>
        )}

        {/* Table */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
          <table className="w-full" data-testid="items-table">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="px-6 py-4 text-left font-bold">TÍTULO</th>
                <th className="px-6 py-4 text-left font-bold">CATEGORÍA</th>
                <th className="px-6 py-4 text-left font-bold">ORDEN</th>
                <th className="px-6 py-4 text-left font-bold">ESTADO</th>
                <th className="px-6 py-4 text-right font-bold">ACCIONES</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, idx) => (
                <tr
                  key={item.id}
                  className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}
                  data-testid="table-row"
                >
                  <td className="px-6 py-4">{item.title}</td>
                  <td className="px-6 py-4">
                    <span className="bg-gray-200 px-3 py-1 rounded-full text-sm font-bold">
                      {item.category}
                    </span>
                  </td>
                  <td className="px-6 py-4">{item.order}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-bold ${
                        item.isActive
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {item.isActive ? "Activo" : "Inactivo"}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button
                      onClick={() => handleEdit(item)}
                      className="text-blue-600 hover:text-blue-800 mr-3"
                      data-testid={`edit-${item.id}`}
                    >
                      <Edit className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="text-red-600 hover:text-red-800"
                      data-testid={`delete-${item.id}`}
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
