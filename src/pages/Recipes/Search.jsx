import { Filter, X } from 'lucide-react';
import { useRecipe } from '../../context/RecipeContext';

function Search() {
  const {
    searchTerm,
    setSearchTerm,
    navigate,
    sortByMatch,
    setSortByMatch
  } = useRecipe();

  return (
    <div className="hidden lg:flex items-center justify-between mb-8">

      <div className="relative flex-1 max-w-2xl">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search recipes..."
          className="w-full bg-white border rounded-2xl py-4 pl-14 pr-10"
        />

        {searchTerm && (
          <button onClick={() => setSearchTerm('')}>
            <X size={18} />
          </button>
        )}
      </div>

      <div className="flex items-center gap-4">

        <button
          onClick={() => setSortByMatch(prev => !prev)}
          className={sortByMatch ? 'bg-primary text-white' : 'bg-white'}
        >
          <Filter />
        </button>

        <button onClick={() => navigate('/pantry-setup')}>
          New Meal Plan
        </button>
      </div>
    </div>
  );
}

export default Search;